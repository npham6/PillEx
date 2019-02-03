import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { compose } from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const styles = StyleSheet.create({
  todosListItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    padding: 16,
    borderColor: '#EDEDED',
  },
  todosListItemTitle: {
    display: 'flex',
    flex: 1,
    color: '#212121',
  },
  todosListItemStatus: {
    display: 'flex',
    flex: 1,
    color: '#212121',
  },
  todosListItemDelete: {
    marginRight: 16,
  },
});

class PillItem extends React.Component {
    constructor(props)
    {
        super(props);
    }
//   onDelete = () => {
//     const { id } = this.props;

//     this.props.pillDelete({ id} );
//   };

//   onDone = () => {
//     const { id } = this.props;

//     this.props.pillUpdate({ id} );
//   };

//   onUndone = () => {
//     const { id } = this.props;

//     this.props.pillUpdate({ id}  );
//   };

  render() {
    const { name } = this.props;

    return (
      <View style={styles.todosListItem}>
        <Text style={styles.todosListItemTitle}>{name}</Text>
        {/* <Text style={styles.todosListItemStatus}>{status}</Text> */}
        <Button
          title="X"
          color="#F44336"
        //   onPress={this.onDelete}
          style={styles.todosListItemDelete}
          danger
        />
      </View>
    );
  }
}

// const TODO_DELETE_MUTATION = gql`
//   mutation pillDelete($filter: PillEx_PillDescrKeyFilter) {
//     pillEx_PillDescrDelete(filter: $filter, force: true) {
//       success
//     }
//   }
// `;

// const TODO_UPDATE_MUTATION = gql`
//   mutation pillUpdate($data: PillEx_PillDescrUpdateInput!) {
//     pillEx_PillDescrUpdate(data: $data) {
//       id
//     }
//   }
// `;

// PillItem = compose(
//   graphql(TODO_DELETE_MUTATION, {
//     name: 'pillDelete',
//     options: {
//       refetchQueries: ['pillEx_PillDescrsList'],
//     },
//   }),
//   graphql(TODO_UPDATE_MUTATION, {
//     name: 'pillUpdate',
//     options: {
//       refetchQueries: ['pillEx_PillDescrsList'],
//     },
//   })
// )(PillItem);

export { PillItem };
