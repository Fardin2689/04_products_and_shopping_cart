import Grid from '@material-ui/core/Grid';
import PItem from '../components/productItem';

const items = [
  {
    id: 1,
    title: 'Brown Brim',
    imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
    price: 250,
    aNumber: 12,
    discountP: 10,
  },
  {
    id: 2,
    title:
      'Blue Beanie These three concepts make up most of the core functionality of React Query. The next sections of the documentation will go over each of these core concepts in great detail',
    imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
    price: 108,
    aNumber: 2,
    discountP: 3,
  },
  {
    id: 3,
    title: 'Brown Cowboy',
    imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
    price: 35,
    aNumber: 0,
    discountP: 20,
  },
  {
    id: 4,
    title: 'Grey Brim',
    imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
    price: 140,
    aNumber: 10,
    discountP: 0,
  },
  {
    id: 5,
    title: 'Green Beanie',
    imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
    price: 180,
    aNumber: 18,
    discountP: 6,
  },
  {
    id: 6,
    title: 'Palm Tree Cap',
    imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
    price: 147,
    aNumber: 3,
    discountP: 10,
  },
  {
    id: 7,
    title: 'Red Beanie',
    imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
    price: 18,
    aNumber: 89,
    discountP: 100,
  },
  {
    id: 8,
    title: 'Wolf Cap',
    imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
    price: 164,
    aNumber: 17,
    discountP: 7,
  },
  {
    id: 9,
    title: 'Blue Snapback',
    imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
    price: 1600,
    aNumber: 9,
    discountP: 1,
  },
];
function Home() {
  return (
    <Grid
      container
      justify="center"
      spacing={2}
      style={{ height: '100%', width: '100%', margin: 0 }}
    >
      {items.map((item) => (
        <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
          <PItem item={item} adminPanel={false} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Home;
