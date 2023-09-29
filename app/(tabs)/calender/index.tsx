import { AntDesign, Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from 'react-native';
import HeaderWithIcon from '../../../components/HeaderWithIcon';
import SectionHeader from "../../../components/SectionHeader";
import { THEME } from "../../../constants/Theme";
import { widthPercentageToDP } from '../../../utils/Responsive';

const CalenderPage = () => {
	return (
	<View style={styles.container}>
<HeaderWithIcon title="Calendrier">
<View style={styles.rowGroup}>
<AntDesign
        name="search1"
        size={28}
        color="gray"
		style={{marginRight:10}}
      />
	     <Ionicons
          name="notifications"
          size={28}
          color={THEME.COLORS.secondaryDarkTextColor}
        />
</View>
</HeaderWithIcon>
<SectionHeader leftTitle="Your Schedule" rightTitle="See All" />
	</View>
	);
};

export default CalenderPage;

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#fff',
		paddingHorizontal:widthPercentageToDP(5)
	},
	rowGroup:{
		flexDirection:'row',
		justifyContent:'space-between',
		
	}
})