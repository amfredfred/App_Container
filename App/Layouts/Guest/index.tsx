import { SafeAreaView } from 'react-native-safe-area-context';
import { ContainerFlex } from '../../Components/Containers';
import { SpanText } from '../../Components/Texts';
import { Keyboard } from "react-native";
import { useEffect, useState } from 'react'


export default function GuestLayout({ children }: { children: React.ReactNode }) {
    const [keyBoardShown, setkeyBoardShown] = useState(false)
    useEffect(() => {

        const keyboardshown = Keyboard.addListener('keyboardDidShow', () => setkeyBoardShown(s => true))
        const keyboardhidden = Keyboard.addListener('keyboardDidHide', () => setkeyBoardShown(s => false))

        return () => {
            keyboardshown.remove()
            keyboardhidden.remove()
        }
    }, [])

    return (
        <ContainerFlex>
            <SafeAreaView>
                {children}
                <SpanText>
                    HEY FRED FREDD GUEST
                </SpanText>
            </SafeAreaView>
        </ContainerFlex>
    )
}