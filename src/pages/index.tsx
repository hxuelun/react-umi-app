import styles from './index.less';
import AreaChart from "@/components/AreaChart/index";
export default function IndexPage() {
  const dataArr = [
    {
      time: "14:00",
      value: 0,
    },
    {
      time: "18:00",
      value: 5000,
    },
    {
      time: "22:00",
      value: 10000,
    },
    {
      time: "06:00",
      value: 8000,
    },
    {
      time: "10:00",
      value: 12000,
    },
  ]
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <AreaChart />
    </div>
  );
}
