import React from 'react';
import { Box, Typography } from '@mui/material';

const DataDisplay = ({ title, data }) => {
    return (
        <Box className="data-display">
            <Typography variant="h4" gutterBottom>{title}</Typography>
            {data.length > 0 ? (
                data.map((item, index) => (
                    <Box key={index} className="data-item" sx={{ marginBottom: 2, padding: 2, backgroundColor: '#f4f4f9', borderRadius: 1 }}>
                        <Typography><strong>Draw Date:</strong> {item.draw_date.split('T')[0]}</Typography>
                        <Typography><strong>Winning Numbers:</strong></Typography>
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                            {item.winning_numbers.split(' ').map((number, idx) => (
                                <Box key={idx} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, backgroundColor: 'white', borderRadius: '70%', border: '1px solid black' }}>
                                    <Typography sx={{ color: 'black' }}>{number}</Typography>
                                </Box>
                            ))}
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
                            <Typography><strong>Mega Ball:</strong></Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, backgroundColor: 'red', borderRadius: '70%', border: '1px solid red', marginLeft: 1 }}>
                                <Typography sx={{ color: 'black' }}>{item.mega_ball}</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
                            <Typography><strong>Multiplier:</strong></Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, backgroundColor: 'white', borderRadius: '70%', border: '1px solid green', marginLeft: 1 }}>
                                <Typography sx={{ color: 'black' }}>{item.multiplier}</Typography>
                            </Box>
                        </Box>
                    </Box>
                ))
            ) : (
                <Typography>No data available.</Typography>
            )}
        </Box>
    );
};

export default DataDisplay;
