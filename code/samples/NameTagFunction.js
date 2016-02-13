const NameTag = ({ name, onChange }) => (
  <div>
    <p>
      Hello, my name is {name}
    </p>
    <p>
      <input
        type="text"
        value={name}
        onChange={e => onChange(e.target.value)}
      />
    </p>
  </div>
);
