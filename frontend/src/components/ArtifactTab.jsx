function ArtifactTab({ artifact, isActive, onContentChange }) {
  if (!isActive) return null;

  return (
    <div className="artifact-tab">
      <textarea
        value={artifact.content}
        onChange={(e) => onContentChange(artifact.identifier, e.target.value)}
        className="artifact-content"
      />
    </div>
  );
}

export default ArtifactTab; 