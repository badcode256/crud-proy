export interface CustomerImplRepository {
    insertOne(obj: Object): Promise<any>;
    get(obj: Object): Promise<any>;
    deleteOne(id: String): Promise<any>;

}