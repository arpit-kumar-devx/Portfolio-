const SingleKeyAchievement = ({ achievement }) => {
  return (
    <div className="bg-gradient-to-br from-darkBlack to-lightBlack border border-lightGrey rounded-lg p-6 hover:border-orange transition-all duration-300 hover:shadow-lg hover:shadow-orange/50">
      <div className="text-4xl mb-4">{achievement.icon}</div>
      <h3 className="text-xl font-bold text-orange mb-3">
        {achievement.title}
      </h3>
      <p className="text-lightGrey text-sm leading-relaxed">
        {achievement.description}
      </p>
    </div>
  );
};

export default SingleKeyAchievement;
