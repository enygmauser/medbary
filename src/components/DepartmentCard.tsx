import { Card, CardContent } from "@mui/material";

export default function DepartmentCard({ title, description }) {
  return (
    <Card
      sx={{
        borderRadius: "18px",
        border: "1px solid #e2e8f0",
        background: "#f8fafc",
        transition: "0.25s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 12px 32px rgba(0,0,0,0.08)",
        },
      }}
    >
      <CardContent>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}
