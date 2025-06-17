// components
import {
    Box,
    Grid,
    Typography,
    Button,
    ButtonGroup,
    TextField,
} from "@mui/material"
import { Controller } from "react-hook-form"
import Fieldset from "../../components/common/fieldset/fieldset"
import MessageDialog from "../../components/common/dialog/messageDialog"

// data
import { formConfigs } from "../../data/revisionData"

// type
import { RevisionType } from "../../types/RevisionType"

// hooks
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useParams } from "react-router-dom"
import useCustomersForm from "../../features/useCustomersForm"
import useFormHooks from "../../hooks/useFormHooks"

const CustomersView: React.FC<RevisionType> = (props) => {

    const { mode, resource } = props
    const { id } = useParams<{ id: string }>()
    const formConfig = formConfigs[resource]?.[mode]
    const { t } = useTranslation()

    const {
        control,
        getFormDataFromId,
        handleReset,
        handleAdd,
        handleSave,
        loading,
        messageDialog,
        errors,
        handleClose,
        handleDelete,
        watch
    } = useCustomersForm()

    const { handleCancel } = useFormHooks()

    useEffect(() => {
        if (id) getFormDataFromId(id)
    }, [id, getFormDataFromId])

    return (
        <Box
            component="form"
            sx={{
                p: 3,
                bgcolor: "background.paper",
                borderRadius: 2,
                boxShadow: 2,
                height: 'calc( 100vh - 140px )'
            }}
        >
            <Grid container size={12} height={'100%'} >
                <Grid size={12} >
                    <Typography variant="h5" mb={2} fontWeight={600}>
                        {t(formConfig.title)}
                    </Typography>
                </Grid>

                <Grid
                    container
                    spacing={3}
                    size={12}
                    sx={{ overflowY: 'auto', height: 'calc( 100% - 140px )' }}
                >
                    <Grid
                        size={{ xs: 12, md: 8 }}
                        pt={1}
                    >
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, md: 10 }}>
                                <Controller
                                    name="id"
                                    control={control}
                                    rules={{ required: t('this_field_is_required') }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            required
                                            error={!!errors.id}
                                            helperText={errors.id?.message}
                                            label={t('customer_id')}
                                            variant="outlined"
                                            slotProps={{
                                                input: {
                                                    readOnly: mode === 'edit',
                                                }
                                            }}
                                        />
                                    )}
                                />

                            </Grid>
                            <Grid size={{ xs: 12, md: 10 }}>
                                <Controller
                                    name="username"
                                    control={control}
                                    rules={{ required: t('this_field_is_required') }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            required
                                            error={!!errors.username}
                                            helperText={errors.username?.message}
                                            label={t('username')}
                                            variant="outlined"
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 10 }}>
                                <Controller
                                    name="email"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            label={t('email')}
                                            variant="outlined"
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 10 }}>
                                <Controller
                                    name="phone"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            label={t('phone')}
                                            variant="outlined"
                                        />
                                    )}
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid
                        container
                        size={{ xs: 12, md: 4 }}
                        pb={1}
                    >
                        <Grid>
                            <Controller
                                name="status"
                                control={control}
                                render={({ field }) => (
                                    <Fieldset
                                        label="customer_status"
                                        isActive={field.value}
                                        onChange={field.onChange}
                                    />
                                )}
                            />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid size={12}>
                    <Box
                        mt={4}
                        display="flex"
                        justifyContent="center"
                        gap={2}
                    >
                        <ButtonGroup variant="outlined">
                            <Button
                                onClick={mode === 'add' ? handleAdd : handleSave}
                                loading={mode === 'add' ? loading.add : loading.save}
                            >
                                {mode === 'add' ? t("add") : t("save")}
                            </Button>
                            <Button onClick={handleReset}>{t("reset")}</Button>
                            {mode === 'edit' && (
                                <Button
                                    onClick={handleDelete}
                                    color="error"
                                >
                                    {t('delete')}
                                </Button>
                            )}
                        </ButtonGroup>
                        <Button
                            variant="contained"
                            color="error"
                            onClick={handleCancel}
                        >
                            {t("cancel")}
                        </Button>
                    </Box>
                </Grid>
            </Grid>

            <MessageDialog
                title={messageDialog.title}
                content={messageDialog.content}
                open={messageDialog.open}
                type={messageDialog.type}
                onConfirm={messageDialog.onConfirm}
                onCancel={messageDialog.onCancel}
                onClose={handleClose}
                inquiry={messageDialog.inquiry}
            />

        </Box>
    )
}

export default CustomersView