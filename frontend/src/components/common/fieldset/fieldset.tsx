// components
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Switch,
} from "@mui/material"

// hooks
import { useTranslation } from "react-i18next"

// types
import { fieldsetProps } from "./fieldset.type"

const Fieldset: React.FC<fieldsetProps> = (props) => {

    const { t } = useTranslation()
    const { label, isActive, onChange } = props

    return (
        <FormControl
            component="fieldset"
            sx={{ border: '1px solid gray', p: 1, borderRadius: 1, minWidth: 150 }}
        >
            <FormLabel component="legend">{t(label)}</FormLabel>
            <FormControlLabel
                control={
                    <Switch
                        checked={isActive}
                        onChange={(e) => onChange(e.target.checked)}
                    />}
                label={isActive ? t('active') : t('disabled')}
                labelPlacement="start"
            />
        </FormControl>
    )
}

export default Fieldset