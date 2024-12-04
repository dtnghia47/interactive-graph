import styled from 'styled-components';

const NodeDetail = ({ data }) => {
  return (
    <div>
      {data?.logo && (
        <div>
          <Logo src={data.logo} alt={data.name} />
        </div>
      )}
      <RowItem>
        <RowItemLabel>ID:</RowItemLabel> {data.id}
      </RowItem>
      <RowItem>
        <RowItemLabel>Name:</RowItemLabel> {data.name}
      </RowItem>
      <RowItem>
        <RowItemLabel>Address:</RowItemLabel> {data.address}
      </RowItem>

      {/* TODO: We can render dynamic fields in here. It's depend on our expectation
      <RowItem>
        <RowItemLabel>Dynamic Label:</RowItemLabel> Dynamic Value
      </RowItem> */}
    </div>
  );
};

const Logo = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`;

const RowItem = styled.div`
  padding: 8px;
  display: flex;
  justify-content: flex-start;
  text-align: left;
`;

const RowItemLabel = styled.span`
  display: flex;
  font-weight: bold;
  padding-right: 10px;
`;

export default NodeDetail;
