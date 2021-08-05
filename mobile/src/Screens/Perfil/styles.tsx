import styled from "styled-components/native";
//import { widthPercentageToDP  as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const MainView = styled.View `
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5%;
`

export const TopView = styled.View `
    border-bottom: 1px solid;
    border-color: black;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const BottomView = styled.View `
    margin-top: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const OptionsView = styled.View `
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 85px;
`

export const OptionView = styled.View `
    flex: 1;
    align-items: stretch;
    justify-content: center;
`

export const RoleText = styled.Text `
    padding: 4px;
    background-color: #236D71;
    border-radius: 16px;
    color: white;
    text-align: center;
    font-weight: 600;
    margin-top: 12px;
`