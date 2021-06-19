import React, { useEffect, useState } from "react";
import {
  DATABASE_NAME,
  EventsDataMap,
  EVENTS_TABLE_NAME,
} from "utils/constants";
import IndexedDb from "utils/db";
import { events } from "utils/eventsData";

interface AppContextInterface {
  eventsData: EventsDataMap;
  todaysDate: Date;
}

/**
 * Context to manage app state
 */
const AppContext = React.createContext<AppContextInterface>({
  eventsData: {},
  todaysDate: new Date(),
});

/**
 * Indexed Db instance
 */
const db = new IndexedDb(DATABASE_NAME);

/**
 * Context Provider to wrap component with AppContext
 * giving access to context Data
 */
export const AppContextProvider = (props: React.PropsWithChildren<{}>) => {
  const [eventsData, setEventsData] = useState<EventsDataMap>({});

  // adds add to the db if not exist and set context state
  useEffect(() => {
    const addDataToDB = async () => {
      await db.createObjectStore(EVENTS_TABLE_NAME);
      const data = await db.getAllValue(EVENTS_TABLE_NAME);
      if (data.length === 0) {
        await db.putBulkValue(EVENTS_TABLE_NAME, events);
      } else {
        console.log("Data already in indexedDb");
      }

      const eventsMap: EventsDataMap = {};

      // transforms the data to the format usable by our app
      events.forEach((event) => {
        const date = new Date(event.date);
        const key = date.toDateString();
        if (!eventsMap[key]) {
          eventsMap[key] = [];
        }
        eventsMap[key].push({ ...event, date: new Date(event.date) });
      });

      setEventsData(eventsMap);
    };
    addDataToDB();
  }, []);

  return (
    <AppContext.Provider value={{ eventsData, todaysDate: new Date() }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
