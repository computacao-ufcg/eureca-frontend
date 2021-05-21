import React, { useEffect, useState } from "react";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { api_EB } from "../../../../services/api";

import "./style.css";

const EnrollmentsGraph = props => {
  const [formatedData, setFormatedData] = useState([]);
  const [type, setType] = useState("obrigatorias");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const query = `/api/statistics/enrollments/summary/csv?from=1950.0&language=PORTUGUESE&to=2049.9`;
    try {
      const res = await api_EB.get(query, {
        headers: {
          "Authentication-Token": sessionStorage.getItem("eureca-token"),
        },
      });

      console.log(res.data);

      const formated = res.data?.map(item => {
        return {
          name: item.discipline,
          uv: 120 * item.totalEnrollments,
          pv: 25000,
          amt: 100,
        };
      });
      console.log(formated);
      setFormatedData(formated);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <BarChart width={680} height={250} data={formatedData} maxBarSize={100}>
      <XAxis dataKey='name' />
      <YAxis dataKey={props.variable} />
      <Bar dataKey='uv' fill='#886859' />
    </BarChart>
  );
};

export default EnrollmentsGraph;
