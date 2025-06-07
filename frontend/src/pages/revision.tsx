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
import ImagesUpload from "../components/common/imageUpload/imageUpload"
import Fieldset from "../components/common/fieldset/fieldset"

// hooks
import { useEffect } from "react"
import { useParams } from 'react-router-dom'
import useIsMobile from "../hooks/useIsMobile"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import useProductForm from "../hooks/useProductForm"
import uploadImageToCloudinary from "../utils/uploadImageToCloudinary"

// config
import { PRODUCTS_API } from "../config/apiConfig"

// data
const productFormData = {
    add: {
        title: 'add_product'
    },
    edit: {
        title: 'edit_product'
    }
} as const

// type
type ProductFormMode = 'add' | 'edit'
interface RevisionType {
    mode: ProductFormMode
}

const Revision: React.FC<RevisionType> = (props) => {

    const { mode } = props
    const { id } = useParams<{ id: string }>()
    const formConfig = productFormData[mode]

    const { isMobile } = useIsMobile('md')
    const { t } = useTranslation()
    const navigate = useNavigate()

    const {
        isSKU,
        isProductName,
        isPrice,
        isQuantity,
        categoryOptions,
        mainCategory,
        subCategory,
        isActive,
        image,
        imageFile,
        setSKU,
        setPrice,
        setProductName,
        setQuantity,
        setMainCategory,
        setSubCategory,
        setActive,
        setImage,
        setImagesFile,
        handleToggle,
        handleMainCategoryChange,
        handleImageChange,
        handleReset,
        getFormDataFromId
    } = useProductForm()

    const mainCategories = Object.keys(categoryOptions)

    useEffect(() => {
        if (id) getFormDataFromId(id)
    }, [id, getFormDataFromId])

    const handleSave = async () => {
        try {

            let imagesUrl = ''
            if (imageFile) {
                imagesUrl = await uploadImageToCloudinary(imageFile)
            }

            const payload = {
                id: isSKU,
                name: isProductName,
                price: isPrice,
                qty: isQuantity,
                mainCategory: mainCategory,
                subCategory: subCategory,
                state: isActive,
                images: imagesUrl,
                updatedAt: new Date()
            }

            await fetch(PRODUCTS_API, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            })
            console.log(payload)
        }
        catch (err) {
            console.error(err)
        }
        finally {
            setSKU('')
            setProductName('')
            setPrice('0')
            setQuantity('0')
            setMainCategory('')
            setSubCategory('')
            setActive(true)
            setImage(null)
            setImagesFile(null)
        }
    }

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

                {/* Main Form */}
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
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    label="SKU"
                                    id="sku"
                                    required
                                    placeholder={t('input_product_serial_number')}
                                    value={isSKU}
                                    onChange={(e) => setSKU(e.target.value)}
                                />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    label={t('product_name')}
                                    id="name"
                                    required
                                    value={isProductName}
                                    onChange={(e) => setProductName(e.target.value)}
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
                                    value={isPrice}
                                    onChange={(e) => setPrice(e.target.value)}
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
                                    value={isQuantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                />
                            </Grid>
                            <Grid container size={{ xs: 12 }}>
                                <Grid size={6}>
                                    <Autocomplete
                                        freeSolo
                                        options={mainCategories}
                                        value={mainCategory}
                                        onInputChange={(e, value) => handleMainCategoryChange(value)}
                                        onChange={(e, value) => handleMainCategoryChange(value || '')}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                label={t('product_category')}
                                                variant="outlined"
                                                placeholder={t('input_or_select_category')}
                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid size={6}>
                                    <Autocomplete
                                        freeSolo
                                        key={mainCategory}
                                        value={subCategory}
                                        options={Array.isArray(categoryOptions[mainCategory]) ? categoryOptions[mainCategory] : []}
                                        disabled={!mainCategory}
                                        onInputChange={(e, value) => setSubCategory(value)}
                                        onChange={(e, value) => setSubCategory(value || '')}
                                        renderInput={(params) => (
                                            <TextField
                                                value={subCategory}
                                                {...params}
                                                label={t('subcategory')}
                                                variant="outlined"
                                                placeholder={t('input_or_select_subcategory')}
                                            />
                                        )}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* Images Slide */}
                    <Grid
                        container
                        size={{ xs: 12, md: 4 }}
                        display={isMobile ? 'flex' : 'grid'}
                        gap={isMobile ? 1 : 4}
                        pb={1}
                        sx={{ placeContent: !isMobile ? 'center' : 'space-between' }}
                    >
                        <Grid order={isMobile ? 2 : 1}>
                            <ImagesUpload
                                image={image}
                                onChange={handleImageChange}
                            />
                        </Grid>
                        <Grid order={isMobile ? 1 : 2}>
                            <Fieldset
                                label="product_status"
                                isActive={isActive}
                                onChange={handleToggle}
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
                            <Button onClick={handleSave}>{t("save")}</Button>
                            <Button onClick={handleReset}>{t("reset")}</Button>
                        </ButtonGroup>
                        <Button
                            variant="contained"
                            color="error"
                            onClick={() => navigate("/backend/products")}
                        >
                            {t("cancel")}
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box >
    )
}

export default Revision