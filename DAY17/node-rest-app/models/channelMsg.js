module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "channel_msg",
    {
      channel_msg_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        comment: "로깅고유번호",
      },
      channel_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "채널고유번호",
      },
      member_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "사용자고유번호",
      },
      nick_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: "채팅닉네임",
      },
      msg_type_code: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "로깅유형코드",
      },
      connection_id: {
        type: DataTypes.STRING(200),
        allowNull: false,
        comment: "채팅고유커넥션아이디",
      },
      message: {
        type: DataTypes.STRING(1000),
        allowNull: false,
        comment: "원본채팅메시지",
      },
      ip_address: {
        type: DataTypes.STRING(20),
        allowNull: false,
        comment: "IP주소",
      },
      top_channel_msg_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "최상위메시지고유번호",
      },
      msg_state_code: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "메시지상태코드 0:퇴장 1:입장 3:일반메시지 4:파일메시지",
      },
      msg_date: {
        type: DataTypes.DATE,
        allowNull: false,
        comment: "등록일시",
      },
      edit_date: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "수정일시",
      },
      del_date: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "등록일시",
      },
    },
    {
      sequelize,
      tableName: "channel_msg",
      timestamps: false,
      comment: "채널채팅이력정보",
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "channel_msg" }],
        },
      ],
    }
  );
};
