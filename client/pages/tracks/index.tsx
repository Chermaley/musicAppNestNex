import MainLayout from "../../layouts/MainLayout";
import React from "react";
import {Box, Button, Card, Grid} from "@material-ui/core";
import {useRouter} from "next/router";
import {ITrack} from "../../types/track";
import TrackList from "../../components/TrackList";

const Index = () => {
    const router = useRouter();
    const tracks: ITrack[] = [
        {_id: 'sdf', artist:' sfs', audio: 'dsfs', comments: [{_id: 'sdfds', text: 'sdfsfsf', username: 'sdfss'}], listens: 15, name: 'sdfsfsddfsdfsdf', picture: 'dsfsfs', text: 'sdfsfs'},
        {_id: 'sdf', artist:' sfs', audio: 'dsfs', comments: [{_id: 'sdfds', text: 'sdfsfsf', username: 'sdfss'}], listens: 15, name: 'sdfsfsddfsdfsdf', picture: 'dsfsfs', text: 'sdfsfs'},
        {_id: 'sdf', artist:' sfs', audio: 'dsfs', comments: [{_id: 'sdfds', text: 'sdfsfsf', username: 'sdfss'}], listens: 15, name: 'sdfsfsddfsdfsdf', picture: 'dsfsfs', text: 'sdfsfs'},
        {_id: 'sdf', artist:' sfs', audio: 'dsfs', comments: [{_id: 'sdfds', text: 'sdfsfsf', username: 'sdfss'}], listens: 15, name: 'sdfsfsddfsdfsdf', picture: 'dsfsfs', text: 'sdfsfs'},
    ]
    return (
        <MainLayout>
            <Grid container justifyContent='center'>
                <Card style={{width: 900}}>
                    <Box p={3}>
                        <Grid container justifyContent='space-between'>
                            <h1>Список треков</h1>
                            <Button onClick={() => router.push('/tracks/create')}>Загрузить</Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={tracks} />
                </Card>
            </Grid>
        </MainLayout>
    );
};

export default Index;