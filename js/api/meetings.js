import {
  collection,
  addDoc,
  doc,
  getDoc,
  getDocs,
} from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js';
import { db } from './index.js';

// Meetings API
export async function createMeeting(meeting) {
  try {
    const meetingRef = await addDoc(meetingsCollection, meeting);
    return { meeting: { ...meeting, id: meetingRef.id } };
  } catch (error) {
    throw error;
  }
}

export async function getMeeting(id) {
  try {
    const meetingRef = doc(db, MEETINGS_COLLECTION, id);
    const meetingDS = await getDoc(meetingRef);

    if (meetingDS.exists()) {
      const meetingData = meetingDS.data();
      return { meeting: formatMeeting(meetingData) };
    } else {
      throw { error: { ...getMeetingMessages.notFound } };
    }
  } catch (error) {
    throw error;
  }
}

export async function getMeetings({ month = '' }) {
  try {
    const meetingsSnap = await getDocs(meetingsCollection);

    const meetings = meetingsSnap.docs.map((meetingDS) => {
      const meetingsData = meetingDS.data();
      return formatMeeting(meetingsData);
    });
    return { meetings };
  } catch (error) {
    throw error;
  }
}

function formatMeeting(meeting) {
  const { options, locations, participants, ...meetingFields } = meeting;

  // Options
  const formattedOptions = options.map((option) => {
    const hours = locations.map((location) => {
      return dayjs(option.datetime.seconds).tz(location).format('H:m');
    });

    return {
      hours,
      votedBy: option.votedBy,
      votes: option.votedBy.length,
    };
  });

  // Votes
  const current = formattedOptions.reduce(
    (subtotal, option) => subtotal + option.votes,
    0
  );
  const total = participants.length;

  return {
    ...meetingFields,
    options: formattedOptions,
    locations,
    participants,
    votes: {
      current,
      total,
    },
  };
}

const MEETINGS_COLLECTION = 'meetings';
const meetingsCollection = collection(db, MEETINGS_COLLECTION);

const getMeetingMessages = {
  notFound: {
    code: 'not-found',
    message: 'La reunión no existe',
  },
};
