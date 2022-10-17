import { useState, useEffect } from 'react';
import { Button, Container, Grid } from '@mui/material';
import axios from 'axios';

const CategorySection = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const res = await axios.get('http://localhost:8000/api/categories');
    setCategories(res.data.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Container maxWidth="xl" sx={{ marginTop: 2, marginBottom: 2 }}>
      <Grid container spacing={2}>
        {categories.length !== 0 &&
          categories.map((category, idx) => (
            <Grid item>
              <Button variant="contained" sx={{ backgroundColor: '#3e586b' }}>
                {category.category}
              </Button>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default CategorySection;
