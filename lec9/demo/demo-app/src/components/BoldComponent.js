/*
props = {
    data: ['test', 'test1'],
    children: [paragraph1, paragraph2]
}
*/
function BoldComponent(props) {
  return <div style={{ fontWeight: 800 }}>{props.children}</div>;
}

export default BoldComponent;
