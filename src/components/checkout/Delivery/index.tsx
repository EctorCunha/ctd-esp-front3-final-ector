import {Box, Select, MenuItem, InputLabel, FormControl} from '@mui/material'
import { CheckoutInput } from 'src/features/checkout/checkout.types'

export default function Delivery(onChange: CheckoutInput){
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: "3rem"
        }} >
            <FormControl sx={{width: '50%'}}>
            <InputLabel>Selecione o método de transporte</InputLabel>
            <Select
            label="Selecione o método de transporte"
            // onChange={onChange}
            // value={}
            name="delivery"
            >
                <MenuItem value={20}>Correios</MenuItem>
                <MenuItem value={30}>Amazon</MenuItem>
                <MenuItem value={40}>Azul Cargo</MenuItem>
            </Select>
            </FormControl>
        </Box>
    )
}