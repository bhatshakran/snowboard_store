import React from 'react';
import { client } from '../../utils/client';
import { Snowboard } from '../shop';

const index = ({ data }) => {
  console.log(data);
  return <div>products here</div>;
};

export async function getStaticPaths() {
  const data = await client.fetch(`*[_type == 'snowboard']`);

  const paths = data.map((doc: any) => {
    return {
      params: {
        id: doc._id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const { id } = params;
  const data = await client.fetch(`*[_id == '${id}']`);
  return {
    props: { data },
  };
}

export default index;
