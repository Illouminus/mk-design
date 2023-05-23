import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import './styles/index.scss'
import {AppRouter} from "./providers/router";
import {Navbar} from "widgets/Navbar";




export const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>


            <Navbar />
            <AppRouter />


        </div>
    );
};


