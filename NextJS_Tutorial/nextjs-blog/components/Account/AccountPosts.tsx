import {
  Header,
  Accordion,
  Label,
  Segment,
  Icon,
  Button,
  List,
  Image,
} from "semantic-ui-react";
import { useRouter } from "next/router";
import formatDate from "../../utils/formatDate";

function AccountPosts({ posts }) {
  const router = useRouter();

  function mappostsToPanels(posts) {
    return posts.map((posts) => ({
      key: posts._id,
      title: {
        content: <Label color="blue" content={formatDate(posts.createdAt)} />,
      },
      content: {
        content: (
          <>
            <List.Header as="h3">
              Total: ${posts.total}
              <Label
                content={posts.email}
                icon="mail"
                basic
                horizontal
                style={{ marginLeft: "1em" }}
              />
            </List.Header>
            <List>
              {posts.products.map((p) => (
                <List.Item key={p.product._id}>
                  <Image avatar src={p.product.mediaUrl} />
                  <List.Content>
                    <List.Header>{p.product.name}</List.Header>
                    <List.Description>
                      {p.quantity} x ${p.product.price}
                    </List.Description>
                  </List.Content>
                  <List.Content floated="right">
                    <Label tag color="red" size="tiny">
                      {p.product.sku}
                    </Label>
                  </List.Content>
                </List.Item>
              ))}
            </List>
          </>
        ),
      },
    }));
  }
  return (
    <>
      <Header as="h2">
        <Icon name="folder open" />
        Order History
      </Header>
      {posts.length === 0 ? (
        <Segment inverted tertiary color="grey" textAlign="center">
          <Header icon>
            <Icon name="copy outline" />
            No past posts.
          </Header>
          <div>
            <Button onClick={() => router.push("/")} color="orange">
              View Products
            </Button>
          </div>
        </Segment>
      ) : (
        <Accordion
          fluid
          styled
          exclusive={false}
          panels={mappostsToPanels(posts)}
        />
      )}
    </>
  );
}

export default AccountPosts;
