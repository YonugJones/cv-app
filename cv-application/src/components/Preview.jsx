export default function Preview({ generalInfo, educationInfo }) {
  return (
    <div className="previewContainer">
      <div className="generalPreviewContainer">
        <h3>{generalInfo.name}</h3>
        <p>{generalInfo.email}</p>
        <p>{generalInfo.phone}</p>
        <p>{generalInfo.address}</p>
      </div>
      <div className="educationPreviewContainer">
        <p>{educationInfo.school}</p>
        <p>{educationInfo.degree}</p>
        <p>{educationInfo.startDate}</p>
        <p>{educationInfo.endDate}</p>
      </div>
    </div>
  );
}