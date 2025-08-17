import { Grid, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ placeholder, value, onChange }) => {
    return (
        <Grid container spacing={2} alignItems="center">
            <Grid item size= {{xs: 12}}>
                <TextField
                    fullWidth
                    placeholder={placeholder}
                    value={value}
                    onChange={e => onChange(e.target.value)}
                    slotProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </Grid>
        </Grid>
    );
};

export default SearchBar;
