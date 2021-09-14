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
      return { meeting: meetingDS.data() };
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
    const meetings = meetingsSnap.docs.map((meetingDS) => meetingDS.data());
    return { meetings };
  } catch (error) {
    throw error;
  }
}

const MEETINGS_COLLECTION = 'meetings';
const meetingsCollection = collection(db, MEETINGS_COLLECTION);

const getMeetingMessages = {
  notFound: {
    code: 'not-found',
    message: 'La reunión no existe',
  },
};
