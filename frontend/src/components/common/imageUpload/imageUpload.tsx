// components
import { Box, Button, Avatar } from "@mui/material"
import PhotoCamera from '@mui/icons-material/PhotoCamera';

// hooks
import { useTranslation } from 'react-i18next';
import useIsMobile from '../../../hooks/useIsMobile';

// type
import { imagesUploadType } from "./imagesUpload.type";

const ImagesUpload: React.FC<imagesUploadType> = (props) => {

    const { t } = useTranslation()
    const { isMobile } = useIsMobile('sm')
    const { image, onChange } = props

    return (
        <Box
            display='flex'
            flexDirection={isMobile ? 'row' : 'column'}
            alignItems='center'
            gap={2}
        >

            <Avatar
                variant='rounded'
                src={image || ''}
                sx={{
                    minWidth: isMobile ? 60 : 120,
                    height: isMobile ? 60 : 120,
                    border: '1px solid #ccc'
                }}
            />

            <input
                accept="image/*"
                id="upload-image"
                type="file"
                style={{ display: 'none' }}
                onChange={onChange}
            />
            <label htmlFor="upload-image">
                <Button
                    variant="contained"
                    color="primary"
                    component="span"
                    startIcon={<PhotoCamera />}
                    size={isMobile ? 'small' : 'medium'}
                >
                    {t('select_image')}
                </Button>
            </label>
        </Box>
    )
}

export default ImagesUpload