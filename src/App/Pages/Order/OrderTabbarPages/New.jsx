import React, { useState } from 'react';
import NewCard from '../Components/NewTabCard.jsx';
import SideContentForNew from '../SidePageForNew.jsx';

const New = ( { onSelectCard } ) =>
{
  const [ selectedCard, setSelectedCard ] = useState( 1 );

  const handleCardClick = cardId =>
  {
    setSelectedCard( cardId );
    onSelectCard( cardId );
  };

  return (
    <div>
      <div
        className='my-2 p-2 custom-scrollbar'
        style={ {
          height: '100vh',
          overflowY: 'auto',
        } }
      >
        <NewCard
          tableNo='Table No. 01'
          description='As soon as'
          price='$60.00'
          clicked={ selectedCard === 1 }
          onClick={ () => handleCardClick( 1 ) }
        />

        <NewCard
          tableNo='Table No. 02'
          description='As soon as'
          price='$39.88'
          clicked={ selectedCard === 2 }
          onClick={ () => handleCardClick( 2 ) }
        />
        <NewCard
          tableNo='Table No. 03'
          description='As soon as'
          price='$40.88'
          clicked={ selectedCard === 3 }
          onClick={ () => handleCardClick( 3 ) }
        />
        <NewCard
          tableNo='Table No. 04'
          description='As soon as'
          price='$29.88'
          clicked={ selectedCard === 4 }
          onClick={ () => handleCardClick( 4 ) }
        />
        <NewCard
          tableNo='Table No. 05'
          description='As soon as'
          price='$50.88'
          clicked={ selectedCard === 5 }
          onClick={ () => handleCardClick( 5 ) }
        />
        <NewCard
          tableNo='Table No. 06'
          description='As soon as'
          price='$80.88'
          clicked={ selectedCard === 6 }
          onClick={ () => handleCardClick( 6 ) }
        />
      </div>
    </div>
  );
};

export default New;
