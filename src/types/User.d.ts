interface Owner {
  _id: string;
  name: string;
  leagueId: string;
  isCommish: boolean;
  accessToken: string;
}

type User = Owner | null;

interface Password {
  password: string;
}

type UserLogin = Pick<Owner, 'name' | 'leagueId'> & Password;
