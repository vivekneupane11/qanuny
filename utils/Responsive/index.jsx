// packages
import { Dimensions, PixelRatio } from 'react-native';

// Retrieve initial screen's width
let screenWidth = Dimensions.get('window').width;

// Retrieve initial screen's height
let screenHeight = Dimensions.get('window').height;

/**
 * Converts provided width percentage to independent pixel (dp).
 * @param  {string} widthPercent The percentage of screen's width that UI element should cover
 *                               along with the percentage symbol (%).
 * @return {number}              The calculated dp depending on current device's screen width.
 */
const widthPercentageToDP = (widthPercentMob, widthPercentTab = null) => {
    // Parse string percentage input and convert it to number.
    const elemWidthMob =
        typeof widthPercentMob === 'number' ? widthPercentMob : parseFloat(widthPercentMob);

    // percentage input for the tab that overwrites the mobile percentage input
    let elemWidthTab
    if (widthPercentTab) {
        elemWidthTab = typeof widthPercentTab === 'number' ? widthPercentTab : parseFloat(widthPercentTab);
    } else {
        elemWidthTab = elemWidthMob
    }

    // Use PixelRatio.roundToNearestPixel method in order to round the layout
    // size (dp) to the nearest one that correspons to an integer number of pixels.
    // Checking screen size between mobile or tablet and returning corresponding sizes
    if (screenWidth < 500) {
        return PixelRatio.roundToNearestPixel((screenWidth * elemWidthMob) / 100);
    } else {
        return PixelRatio.roundToNearestPixel((screenWidth * elemWidthTab) / 100);
    }
};

/**
 * Converts provided height percentage to independent pixel (dp).
 * @param  {string} heightPercent The percentage of screen's height that UI element should cover
 *                                along with the percentage symbol (%).
 * @return {number}               The calculated dp depending on current device's screen height.
 */
const heightPercentageToDP = (heightPercentMob, heightPercentTab = null) => {
    // Parse string percentage input and convert it to number.
    const elemHeightMob =
        typeof heightPercentMob === 'number'
            ? heightPercentMob
            : parseFloat(heightPercentMob);

    // percentage input for the tab that overwrites the mobile percentage input
    let elemHeightTab;
    if (heightPercentTab) {
        elemHeightTab = typeof heightPercentTab === 'number'
            ? heightPercentTab
            : parseFloat(heightPercentTab);
    } else {
        elemHeightTab = elemHeightMob;
    }
    // Use PixelRatio.roundToNearestPixel method in order to round the layout
    // size (dp) to the nearest one that correspons to an integer number of pixels.
    // Checking screen size between mobile or tablet and returning corresponding sizes
    if (screenWidth < 500) {
        return PixelRatio.roundToNearestPixel((screenHeight * elemHeightMob) / 100);
    } else {
        return PixelRatio.roundToNearestPixel((screenHeight * elemHeightTab) / 100);
    }
};

const fontSizeToDp = (fontSize) => {
    const elemWidth =
        typeof fontSize === 'number' ? fontSize : parseFloat(fontSize);

    // Use PixelRatio.roundToNearestPixel method in order to round the layout
    // size (dp) to the nearest one that correspons to an integer number of pixels.
    if (screenWidth < 500) {
        return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
    } else {
        return PixelRatio.roundToNearestPixel(((screenWidth / 1.5) * elemWidth) / 100);
    }
}

/**
 * Event listener function that detects orientation change (every time it occurs) and triggers
 * screen re-rendering. It does that, by changing the state of the screen where the function is
 * called. State changing occurs for a new state variable with the name 'orientation' that will
 * always hold the current value of the orientation after the 1st orientation change.
 * Invoke it inside the screen's constructor or in componentDidMount lifecycle method.
 * @param {object} that Screen's class components this variable. The function needs it to
 *                      invoke setState method and trigger screen rerender (this.setState()).
 */
const listenOrientationChange = (that) => {
    Dimensions.addEventListener('change', (newDimensions) => {
        // Retrieve and save new dimensions
        screenWidth = newDimensions.window.width;
        screenHeight = newDimensions.window.height;

        // Trigger screen's rerender with a state update of the orientation variable
        that.setState({
            orientation: screenWidth < screenHeight ? 'portrait' : 'landscape',
        });
    });
};

/**
 * Wrapper function that removes orientation change listener and should be invoked in
 * componentWillUnmount lifecycle method of every class components (UI screen) that
 * listenOrientationChange function has been invoked. This should be done in order to
 * avoid adding new listeners every time the same components is re-mounted.
 */
const removeOrientationListener = () => {
    Dimensions.removeEventListener('change', () => { });
};

export {
    fontSizeToDp, heightPercentageToDP,
    listenOrientationChange,
    removeOrientationListener, widthPercentageToDP
};
