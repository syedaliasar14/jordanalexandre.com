interface Props {
  name: string;
  email: string;
  message: string;
}

export default function ContactEmail({ name, email, message }: Props) {
  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#ffffff",
    color: "#111111",
    padding: "16px",
    margin: 0,
  };

  const cardStyle = {
    maxWidth: "600px",
    margin: "0 auto",
    border: "1px solid #e5e5e5",
    borderRadius: "8px",
    padding: "16px",
  };

  const labelStyle = {
    fontSize: "12px",
    color: "#666666",
    margin: "12px 0 4px",
    textTransform: "uppercase" as const,
    letterSpacing: "0.04em",
  };

  const valueStyle = {
    fontSize: "14px",
    margin: 0,
    whiteSpace: "pre-wrap" as const,
  };

  return (
    <html>
      <body style={containerStyle}>
        <div style={cardStyle}>
          <h1 style={{ fontSize: "18px", margin: "0 0 12px" }}>
            New message from your website
          </h1>

          <p style={{ margin: "0 0 16px", fontSize: "14px", color: "#333333" }}>
            Reply directly to this email to respond.
          </p>

          <div>
            <p style={labelStyle}>Name</p>
            <p style={valueStyle}>{name}</p>

            <p style={labelStyle}>Email</p>
            <p style={valueStyle}>{email}</p>

            <p style={labelStyle}>Message</p>
            <p style={valueStyle}>{message}</p>
          </div>
        </div>
      </body>
    </html>
  );
}
// ...existing code...