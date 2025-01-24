export default function Wrapper(props) {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <div
          style={{
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.15)',
          }}
        >
          {props.children}
        </div>
      </div>
    );
  }
  