// components
import {
    Box,
    Grid,
    Typography,
    Button,
    ButtonGroup,
    TextField,
    Autocomplete
} from "@mui/material"
import ImagesUpload from "../../components/common/imageUpload/imageUpload"
import Fieldset from "../../components/common/fieldset/fieldset"
import { Controller } from "react-hook-form"
import MessageDialog from "../../components/common/dialog/messageDialog"

// data
import { formConfigs } from "../../data/revisionData"

// type
import { RevisionType } from "../../types/revisionType"

// hooks
import { useEffect } from "react"
import { useParams } from 'react-router-dom'
import { useTranslation } from "react-i18next"
import useIsMobile from "../../hooks/useIsMobile"
import useProductForm from "../../features/useProductForm"

const ProductView: React.FC<RevisionType> = (props) => {

    const { mode, resource } = props
    const { id } = useParams<{ id: string }>()
    const formConfig = formConfigs[resource]?.[mode]

    const { isMobile } = useIsMobile('md')
    const { t } = useTranslation()

    const {
        register,
        control,
        errors,
        loading,
        messageDialog,

        watchedMainCategory,
        watchedImages,
        categoryOptions,

        handleReset,
        handleAdd,
        handleSave,
        handleDelete,
        handleClose,
        handleCancel,
        getFormDataFromId,
        handleImageChange
    } = useProductForm()

    const mainCategories = Object.keys(categoryOptions)

    useEffect(() => {
        if (id) { getFormDataFromId(id) }
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
            <Grid container size={12} height={'100%'}>
                <Grid size={12}>
                    <Typography variant="h5" mb={2} fontWeight={600}>
                        {t(formConfig.title)}
                    </Typography>
                </Grid>

                <Grid
                    container
                    spacing={3}
                    sx={{ overflowY: 'auto', height: 'calc( 100% - 140px )' }}
                >
                    <Grid
                        size={{ xs: 12, md: 8 }}
                        pt={1}
                    >
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12 }} >
                                <Controller
                                    name="id"
                                    control={control}
                                    rules={{ required: t('this_field_is_required') }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            variant="outlined"
                                            label="SKU"
                                            required
                                            error={!!errors.id}
                                            helperText={errors.id?.message}
                                            placeholder={t('input_product_serial_number')}
                                            slotProps={{
                                                input: {
                                                    readOnly: mode === 'edit',
                                                }
                                            }}
                                        />
                                    )}
                                />

                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <Controller
                                    name="name"
                                    control={control}
                                    rules={{ required: t('this_field_is_required') }}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            fullWidth
                                            variant="outlined"
                                            label={t('product_name')}
                                            required
                                            error={!!errors.name}
                                            helperText={errors.name?.message}
                                        />
                                    )}
                                />

                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    label={t('price')}
                                    id="price"
                                    type="number"
                                    required
                                    {...register("price", {
                                        required: t('this_field_is_required'),
                                        valueAsNumber: true,
                                        min: {
                                            value: 0,
                                            message: t('price_cannot_be_less_than_0')
                                        }
                                    })}
                                    error={!!errors.price}
                                    helperText={errors.price?.message}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    label={t('quantity')}
                                    id="qty"
                                    type="number"
                                    required
                                    {...register("qty", {
                                        required: t('this_field_is_required'),
                                        valueAsNumber: true,
                                        min: {
                                            value: 0,
                                            message: t('price_cannot_be_less_than_0')
                                        }
                                    })}
                                    error={!!errors.qty}
                                    helperText={errors.qty?.message}
                                />
                            </Grid>
                            <Grid container size={{ xs: 12 }}>
                                <Grid size={6}>
                                    <Controller
                                        name="mainCategory"
                                        control={control}
                                        render={({ field }) => (
                                            <Autocomplete
                                                freeSolo
                                                options={mainCategories}
                                                value={field.value}
                                                onInputChange={(e, value) => field.onChange(value)}
                                                onChange={(e, value) => field.onChange(value || '')}
                                                renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        label={t('product_category')}
                                                        variant="outlined"
                                                        placeholder={t('input_or_select_category')}
                                                    />
                                                )}
                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid size={6}>
                                    <Controller
                                        name="subCategory"
                                        control={control}
                                        render={({ field }) => (
                                            <Autocomplete
                                                freeSolo
                                                value={field.value}
                                                options={Array.isArray(categoryOptions[watchedMainCategory]) ? categoryOptions[watchedMainCategory] : []}
                                                disabled={!watchedMainCategory}
                                                onInputChange={(e, value) => field.onChange(value)}
                                                onChange={(e, value) => field.onChange(value || '')}
                                                renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        label={t('subcategory')}
                                                        variant="outlined"
                                                        placeholder={t('input_or_select_subcategory')}
                                                    />
                                                )}
                                            />
                                        )}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid
                        container
                        size={{ xs: 12, md: 4 }}
                        display={isMobile ? 'flex' : 'grid'}
                        gap={isMobile ? 1 : 4}
                        pb={1}
                        sx={{ placeContent: !isMobile ? 'center' : 'space-between' }}
                    >
                        <Grid order={isMobile ? 2 : 1}>
                            <Controller
                                name="images"
                                control={control}
                                render={() => (
                                    <ImagesUpload
                                        value={watchedImages}
                                        onChange={handleImageChange}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid order={isMobile ? 1 : 2}>
                            <Controller
                                name="status"
                                control={control}
                                render={({ field }) => (
                                    <Fieldset
                                        label="product_status"
                                        isActive={field.value}
                                        onChange={field.onChange}
                                    />
                                )}
                            />
                        </Grid>
                    </Grid>
                </Grid>

                {/* Button Area */}
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
                                    color="error"
                                    onClick={handleDelete}
                                    loading={loading.delete}
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
        </Box >
    )
}

export default ProductView