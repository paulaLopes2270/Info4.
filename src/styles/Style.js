import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        width: `100%`,
        flex: 1,
        alignItems: `center`,
        justifyContent: 'center',
        backgroundColor: `#E5E5E5`,
    },

    text: {
        color: `black`,
    },

    imgLogo: {

        width: 288,
        height: 105,
        flexBasis: 125,
        marginTop: 25,
        marginBottom: 80,
    },

    input: {
        backgroundColor: `#fff`,
        width: 275,
        height: 68,
        marginBottom: 27,
        textAlignVertical: "top",
        fontSize: 14,
        fontFamily: `roboto`,
        margin: 0,
        padding: 0,

    },

    button: {
        backgroundColor: `#0000001f`,
        height: 33,
        width: 154,
        borderRadius: 20,
        alignItems: `center`,
        justifyContent: `center`,
        

    },

    checkboxContainer: {

        flexDirection: "row",
        marginBottom: 25,
        alignItems: "center",
        justifyContent:"center", 
        

    },
    checkbox: {
        alignSelf: "center",
       

    },
    label: {
        margin: 8,
    },
})