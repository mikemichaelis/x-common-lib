
export interface IAuthService {
    login(): void;
    logout(): void;
    authenticated(): boolean;
    subscribe(onNext: (value: any) => {}): void;
}