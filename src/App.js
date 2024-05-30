import React, { useEffect, useState } from 'react';
import { Typography, TextField } from '@mui/material';
import { LocalizationProvider, DatePicker, PickersDay } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import isSameDay from 'date-fns/isSameDay';
import './App.css';
import DataDisplay from './components/DataDisplay';
import dayjs from 'dayjs';

const App = () => {
    const [data, setData] = useState([]);
    const [recentData, setRecentData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [drawDates, setDrawDates] = useState([]);

    useEffect(() => {
        fetch('https://data.ny.gov/resource/5xaw-6ayf.json')
            .then(response => response.json())
            .then(data => {
                const sortedData = data.sort((a, b) => new Date(b.draw_date) - new Date(a.draw_date));
                setData(sortedData);
                setRecentData([sortedData[0]]);
                setDrawDates(sortedData.map(item => new Date(item.draw_date)));
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        const formattedDate = dayjs(date).format('YYYY-MM-DD');
        const filteredData = data.filter(item => item.draw_date.split('T')[0] === formattedDate);
        setFilteredData(filteredData);
    };

    const renderDatePickerDay = (date, selectedDate, pickersDayProps) => {
        const isDrawDate = drawDates.some(drawDate => isSameDay(drawDate, date.toDate()));
        return (
            <PickersDay
                {...pickersDayProps}
                sx={{
                    backgroundColor: isDrawDate ? 'rgba(255, 0, 0, 0.2)' : 'transparent',
                    borderRadius: '50%',
                    '&:hover': {
                        backgroundColor: isDrawDate ? 'rgba(255, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.04)',
                    },
                    ...(isDrawDate && {
                        '.Mui-selected': {
                            backgroundColor: 'red',
                            color: 'white',
                        },
                    }),
                }}
            />
        );
    };

    return (
        <div className="container">
            <header>
          <h1>Power Ball Numbers</h1>
          <h3>Pulled from NY Open Data</h3>
            </header>
            <section className="search">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Select Date"
                        value={selectedDate}
                        onChange={handleDateChange}
                        renderDay={renderDatePickerDay}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </section>
            <DataDisplay title="Most Recent Data" data={recentData} />
            <DataDisplay title="Search Results" data={filteredData} />
            <footer>
                <Typography variant="body2" align="center" sx={{ marginTop: 4 }}>
                    Data sourced from <a href="https://data.ny.gov" target="_blank" rel="noopener noreferrer">data.ny.gov</a> using Creative Commons License.
                    Licensed by Tyler Technologies under <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/" target="_blank" rel="noopener noreferrer">CC BY-NC-SA 3.0</a>.
                </Typography>
            </footer>
        </div>
    );
};

export default App;
