import { StyleSheet } from 'react-native';

// const theme2 = {
//     bgColor: '#627254',
//     surfaceColor: '#76885B',
// }

export const theme = {
    bgColor: '#fff',
    surfaceColor: '#f1ff',
    shadowColor: "#000",
    horizontalMargin: 20,
}

export default StyleSheet.create({
    // bgContainer: {
    //     justifyContent: 'center', 
    //     alignItems: 'center', 
    //     flex: 1,
    //     backgroundColor: theme.bgColor,
    // },
    card: {
        backgroundColor: theme.bgColor,
        borderRadius: 10,
        padding: 15,
        marginVertical: 5,
        marginHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardText: {
        fontSize: 18,
        fontWeight: 'bold',
    }

});