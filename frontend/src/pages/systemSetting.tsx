// components
import {
    Card,
    CardContent,
    Typography,
    Grid,
    Select,
    FormControl,
    MenuItem,
} from "@mui/material"

// hooks
import { useTranslation } from "react-i18next"
import useLangSelect from "../hooks/useLangSelect"

// data
import { langOption } from "../data/langOption"

const SystemSetting = () => {

    const { lang, handleChange } = useLangSelect()
    const { t } = useTranslation()

    return (
        <Grid container spacing={3}>

            <Grid size={12}>
                <Card>
                    <CardContent>
                        <Typography>{t('system_settings')}</Typography>
                        <Typography variant="h6">{t('set_your_app_language_and_appearance_here')}</Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid size={12}>
                <Card>
                    <CardContent>
                        <Typography>{t('language_setting')}</Typography>
                        <FormControl sx={{ mt: 2 }}>
                            <Select
                                value={lang}
                                onChange={handleChange}
                            >
                                {langOption.map(({ value, text }) => (
                                    <MenuItem value={value}>{text}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </CardContent>
                </Card>
            </Grid>

        </Grid>
    )
}

export default SystemSetting