import React from "react";
import { Grid, List } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityDetails from "../details/ActivityDetails";
import ActivtiyForm from "../form/ActivityForm";
import ActivtiyList from "./ActivityList";

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
}

export default function ActivityDashboard({ activities, selectActivity, selectedActivity,
    cancelSelectActivity }: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivtiyList activities={activities} selectActivity={selectActivity}/>
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity &&
                    <ActivityDetails activity={selectedActivity} cancelSelectActivity={cancelSelectActivity} />}
                <ActivtiyForm />
            </Grid.Column>
        </Grid>
    )
}