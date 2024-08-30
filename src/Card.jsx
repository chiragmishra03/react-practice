import react from 'react';
const Card = (props) => {
  const handleDelete = (name) => {
    props.HandleDelete(name);
  };

  return (
    <div
      style={{
        backgroundColor:
          props.user.designation === 'President' ? 'pink' : 'green',
      }}
    >
      <p>name - {props.user.name}</p>
      <p style={{ color: 'red' }}>deptname - {props.user.dept}</p>
      <p>level- {props.user.level}</p>
      <p style={{ color: 'blue' }}>designation - {props.user.designation}</p>
      <p>salary - {props.user.salary}</p>
      <button
        onClick={() => {
          handleDelete(props.user.name);
        }}
        style={{ background: 'red' }}
      >
        {' '}
        delete
      </button>
    </div>
  );
};

export default Card;
