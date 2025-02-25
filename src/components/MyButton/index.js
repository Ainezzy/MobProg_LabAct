import React from 'react'
import {Button} from 'react-native-paper'

const MyButton = ({text, action, mode, size, backgroundColor, fontColor}) => {

    let style = null
    
    switch(size){
        case 'small':
            style = {...btnStyle.buttonSmall}
            break;
        case 'medium':
            style = {...btnStyle.buttonMedium}
            break;
        case 'large':
            style = {...btnStyle.buttonLarge}
            break;
        default:
            style = btnStyle.buttonMedium
            break;
    }

  return (
    <Button 
    contentStyle={style} 
    mode={mode} 
    onPress={() => action()}
    style={{ backgroundColor: backgroundColor }}
    labelStyle={{ color: fontColor }}
    >
        {text}
    </Button>
  )
}

export default MyButton

const btnStyle = {
    buttonSmall: {
        height: 50,
    },
    buttonMedium: {
        height: 60,
    },
    buttonLarge: {
        height: 70,
    }
}