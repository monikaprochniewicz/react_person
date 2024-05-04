export const Person = ({ person }) => {
  function maritalStstus(human) {
    if (!human.isMarried) {
      return 'I am not married';
    }

    const partner = human.sex === 'f' ? 'husband' : 'wife';

    return `${human.partnerName} is my ${partner}`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>

      {!!person.age && <p className="Person__age">I am {person.age}</p>}

      <p className="Person__partner">{maritalStstus(person)}</p>
    </section>
  );
};
