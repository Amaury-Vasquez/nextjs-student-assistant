import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Layout from 'components/layout';
import styles from 'styles/home.module.css';
import animate from 'styles/animation.module.css';
import { useSchedule } from 'hooks/useSchedule';
import { ScheduleMenu } from 'components/scheduleMenu';
// import { SchoolSubject, SchoolSubjectTime } from 'interfaces';

const { fadeIn } = animate;
const {
  caption,
  title,
  schedule,
  topWrapper,
  scheduleTable,
  tableCell,
  tableDay,
  tableSubject,
  oddFill,
  evenFill,
} = styles;

const Home: NextPage = () => {
  const { subjects, getWeekDays, getWeekRange } = useSchedule();
  const username = 'Amaury Vasquez';

  return (
    <>
      <Head>
        <title> Home | Student assistant </title>
      </Head>
      <Layout>
        <p className={title}> {`Hello ${username}!`} </p>
        <div className={schedule}>
          <div className={topWrapper}>
            <p className={caption}> Your schedule </p>
            <ScheduleMenu />
          </div>
          <table className={scheduleTable}>
            <thead>
              <tr>
                <th className={`${tableDay} ${tableCell} ${fadeIn}`}>
                  Subject
                </th>
                {getWeekDays().map((day) => (
                  <th
                    className={`${tableDay} ${tableCell} ${fadeIn}`}
                    key={day}
                  >
                    {day}
                  </th>
                ))}
              </tr>
              {subjects.map((sbj, i) => {
                const { max } = getWeekRange(subjects);
                const { hour } = sbj;
                const arr = Array.from({ length: max }, () => '');
                hour.forEach((el) => {
                  arr[el.weekday - 1] = el.starts + '-' + el.ends;
                });
                return (
                  <tr
                    className={`${i % 2 ? oddFill : evenFill} ${fadeIn}`}
                    key={sbj.name + i}
                  >
                    <td className={`${tableCell} ${tableSubject} `}>
                      {sbj.shortname}
                    </td>
                    {arr.map((hour, i) => (
                      <td className={`${tableCell} `} key={i + hour}>
                        {hour}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </thead>
          </table>
        </div>
      </Layout>
    </>
  );
};

export default Home;
