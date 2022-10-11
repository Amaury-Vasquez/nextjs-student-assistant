import { ReactNode } from 'react';

export interface UserValues {
  username: string;
}

export interface ContextValues {
  isAuth: boolean;
  loading: boolean;
  setAuth: Function;
  setLoading: Function;
  user?: UserValues;
}

export type ParentElementProps = {
  children: ReactNode;
};

export interface SchoolSubjectTime {
  weekday: number;
  starts: string;
  ends: string;
}

export interface SchoolSubject {
  name: string;
  shortname: string;
  teacher: string;
  hour: SchoolSubjectTime[];
}
