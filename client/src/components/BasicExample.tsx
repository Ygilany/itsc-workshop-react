import Card from 'react-bootstrap/Card';

export function CardExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://via.placeholder.com/150" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          this text here, i get different rendering of my app.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}