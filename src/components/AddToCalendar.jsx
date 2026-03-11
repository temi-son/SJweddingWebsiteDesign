import { AddToCalendarButton } from "add-to-calendar-button-react";
import weddingData from "../data/weddingDetails.json"

const AddToCalendar = () => {
    const { couple, event, sections } = weddingData;
    return (
        <div className="relative group">
            {/* 1. VISUAL LAYER: This is what guests see */}
            <div className="btn-uv pointer-events-none">
                {sections.saveTheDate}
            </div>

            {/* 2. INTERACTION LAYER: This is the invisible clickable area */}
            <div className="absolute inset-0 opacity-0">
                <AddToCalendarButton
                    name={`${couple.bride} & ${couple.groom}'s Wedding`}
                    label={sections.saveTheDate}
                    description={event.description}
                    startDate={event.date}
                    endDate={event.date}
                    startTime={event.startTime}
                    endTime={event.endTime}
                    location={event.location}
                    options={['Apple', 'Google', 'iCal', 'Microsoft365', 'Outlook.com', 'Yahoo']}
                    timeZone="Europe/Berlin"
                    trigger="click"
                    inline
                    listStyle="modal"
                    buttonStyle="round"
                />
            </div>
        </div>
    );
}

export default AddToCalendar;