
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Shirts", sales: 120 },
  { name: "Jeans", sales: 80 },
  { name: "Shoes", sales: 150 },
  { name: "Hats", sales: 60 },
  { name: "Bags", sales: 100 },
];

const Productchart = () => {
  return (
    <div style={{ width: "50%", height: 200 }}>
      <h2>📊 Product Sales Chart</h2>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 20, right: 30, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" fill="#4CAF50" barSize={50} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Productchart;
