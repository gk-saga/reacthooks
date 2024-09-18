
import { Grid2, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import axios from 'axios';
import { base_url } from '../../config';
import { useEffect, useState } from 'react';

export const UserApiData = () => {
    const [userData, setUserData] = useState([])
    const [planId, setPlanId] = useState('2');
    const getData = async () => {
        try {
            const response = await axios.post(`${base_url}settings/getAllLeaderBoardetails`, planId)
            if (response.data.status === true) {
                setUserData(response.data.data)
            }
        } catch (error) {
            console.log("error fetching Data", error)
        }
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <Grid2 container sx={{ backgroundColor: 'red' }}>
                <Grid2 item sm={12}>
                    <Grid2 container>
                        {userData.map((data, index) => (
                            <Grid2 item key={index}>
                                <Stack spacing={2.5} alignItems={'center'}>
                                    <img src={data.profileImage} alt={data.user_fullname} className="customerPicExpend" />
                                    <Stack spacing={0.5} alignItems={'center'}>
                                        <Typography variant='h5'>{data.name}</Typography>
                                        <Typography color='secondary'>{data.planName}</Typography>
                                    </Stack>
                                </Stack>
                            </Grid2>
                        ))}

                    </Grid2>
                </Grid2>
            </Grid2>
        </>
    )
}