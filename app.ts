// De Novato a Ninja: Aprende TypeScript - curso intensivo (#1

const persona = {
  name: "Luber",
  age: 24,
};

let age: number = 25;
let price: number = 10.5;

// string: Representa cadenas de texto.

let nombre: string = "John Doe";

// boolean: Representa valores verdadero/falso.

let isStudent: boolean = true;

// Array: Representa una lista de elementos. Puedes definir un tipo específico para los elementos del array o usar el tipo any para permitir cualquier tipo de dato.

let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: Array<string> = ["apple", "banana", "orange"];

// Tuple: Representa una matriz fija de elementos, donde cada elemento puede tener un tipo diferente.

let tuple: [string, number] = ["apple", 5];

// Enum: Permite definir un conjunto de constantes con nombres significativos.

enum Color {
  Red,
  Green,
  Blue,
}

let color: Color = Color.Red;

// Any: Representa un valor para el que no se especifica un tipo estático. Puede ser de cualquier tipo.

let variable: any = "Hello";
variable = 5; // Ahora puede ser un número

let unknow: unknown = "Hola";

// Void: Representa la ausencia de tipo. Usualmente se usa como el tipo de retorno de una función que no devuelve ningún valor.

function sayHello(): void {
  console.log("Hello!");
}

// Null y Undefined: Tienen sus propios tipos llamados null y undefined, respectivamente.

let nullValue: null = null;
let undefinedValue: undefined = undefined;

// Never: Representa el tipo de valores que nunca ocurren. Por ejemplo, una función que siempre arroja una excepción o nunca termina de ejecutarse.

function throwError(message: string): never {
  throw new Error(message);
}

// Object: Representa cualquier valor que no sea ninguno de los tipos primitivos.

let obj: object = { name: "John", age: 30 };

// Function: Representa el tipo de las funciones.

let add: (x: number, y: number) => number = function (x, y) {
  return x + y;
};

// functions

// function saludar(name:string) {
//     console.log(`Hola ${name}`)
// }

// saludar("Luber");

//  Ejemplo de pasar un obejto ysin destructurar
// function saludar({name,age}: { name: string; age: number }) {
//     const { name, age } = persona;
//     console.log(`Hola ${name}, tienes ${age} años`);
//   }

//  Ejemplo de pasar un objto y destructurarlo
function saludar(persona: { name: string; age: number }): string {
  const { name, age } = persona;
  console.log(`Hola ${name}, tienes ${age} años`);
  return name;
}

const sayHiFromFunction = (fn: (name: string) => void) => {
  fn("Luber");
};

const sayHi = (name: string) => {
  console.log(`Hola ${name} desde aqui LOCO`);
};

sayHiFromFunction(sayHi);

// console.log(!!"false" == !!"true");

// Tipar arrow functions

const sumar = (a: number, b: number): number => a + b;

const restar: (a: number, b: number) => number = (a, b) => a - b;

// never

function throwErrorLol(message: string): never {
  throw new Error(message);
}

const avengers = ["Spidey", "Hulk", "Capitan America"];

avengers.forEach((avenger) => {
  console.log(avenger.toUpperCase());
});

// objetos

// Type Alias

// type Hero = {
//   name: string;
//   age: number;
// };

// let hero: Hero = {
//   name: "thor",
//   age: 15000,
// };

// function createHero(hero: Hero): Hero {
//   const { name, age } = hero;
//   return { name, age };
// }
// const spidey = createHero({name:"Spiderman", age:15});

// console.log(`Heroe: ${spidey.name} edad ${spidey.age}`);

// OPTIONAL PROPERTIES

// Template union types

type HexadecimalColor = `#${string}`;

// const color : HexadecimalColor = '0033ff';
const color2: HexadecimalColor = "#0033ff";

// type HeroId = `${string}-${string}-${string}-${string}-${string}`;

// type Hero = {
//   readonly id?: HeroId; // del tipo de arriba se creo.
//   name: string;
//   age: number;
//   isActive?: boolean; // si es opcional
// };

// let hero: Hero = {
//   name: "thor",
//   age: 15000,
// };

// function createHero(hero: Hero): Hero {
//   const { name, age } = hero;
//   return {
//     id: crypto.randomUUID(),
//     name,
//     age,
//     isActive: true,
//   };
// }
//  Inmutabilidad
// const spidey = Object.freeze(createHero({ name: "Spiderman", age: 15 }));

// console.log(`Heroe: ${spidey.name} edad ${spidey.age}`);

// Union Types

// type HeroId = `${string}-${string}-${string}-${string}-${string}`;

// type HeroPowerScale =
//   | "local"
//   | "planetary"
//   | "galactic"
//   | "universal"
//   | "multiversal"
//   | "omnipresent";

// type Hero = {
//   readonly id?: HeroId; // del tipo de arriba se creo.
//   name: string;
//   age: number;
//   isActive?: boolean; // si es opcional
//   powerScale ?: HeroPowerScale
// };

// let hero: Hero = {
//   name: "thor",
//   age: 15000,
// };

// function createHero(hero: Hero): Hero {
//   const { name, age } = hero;
//   return {
//     id: crypto.randomUUID(),
//     name,
//     age,
//     isActive: true,
//   };
// }
// const thor = createHero({name:"Thor", age:1500})
// thor.powerScale = "universal"

// Intersection Types

// type HeroId = `${string}-${string}-${string}-${string}-${string}`;

// type HeroPowerScale =
//   | "local"
//   | "planetary"
//   | "galactic"
//   | "universal"
//   | "multiversal"
//   | "omnipresent";

// type HeroBasicInfo = {
//   name: string;
//   age: number;
// };

// type HeroProperties = {
//   readonly id?: HeroId; // del tipo de arriba se creo.
//   isActive?: boolean; // si es opcional
//   powerScale?: HeroPowerScale;
// };

// type Hero = HeroBasicInfo & HeroProperties;

// let hero: Hero = {
//   name: "thor",
//   age: 15000,
// };

// function createHero(input: HeroBasicInfo): Hero {
//   const { name, age } = input;

//   return {
//     id: crypto.randomUUID(),
//     name,
//     age,
//     isActive: true,
//   };
// }
// const thor = createHero({ name: "Thor", age: 1500 });
// thor.powerScale = "universal";

// Type Indexing

// type HeroProperties = {
//   isActive?: boolean; // si es opcional
//   address: {
//     planet: string;
//     city: string;
//   };
// };

// const addressHero: HeroProperties["address"] = {
//   planet: "Tierra",
//   city: "Caracas",
// };

// Type from values

// const address = {
//   planet: "Tierra",
//   city: "Caracas",
// };

// type Address = typeof address;

// const addresTwitch: Address = {
//   planet: "Marte",
//   city: "Twitch",
// };

//  Type from function return
//  Guarda los tipo de datos que returna una funcion.

function createAddress() {
  return {
    planet: "Tierra",
    city: "Maracay",
  };
}

type Address = ReturnType<typeof createAddress>;

//  Array
//  Forma 1
const languages: string[] = [];
// Forma 2
const languagesExample: Array<string> = [];

// Colocar varios tipos en el array
// const languages : (string | number)[] = []

languages.push("Javascript");
languages.push("Python");

languagesExample.push("Java");

// type HeroId = `${string}-${string}-${string}-${string}-${string}`;

// type HeroPowerScale =
//   | "local"
//   | "planetary"
//   | "galactic"
//   | "universal"
//   | "multiversal"
//   | "omnipresent";

// type HeroBasicInfo = {
//   name: string;
//   age: number;
// };

//  const herosWithBasicInfo : HeroBasicInfo[] = []

type CellValue = "X" | "O" | "";

//  Tuples

type GameBoard = [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue]
];

const gameBoard = [
  ["X", "0", "X"],
  ["O", "X", "O"],
  ["X", "", "O"],
];

//  tuples

type RGB = readonly [number, number, number];

const rgb: RGB = [1, 4, 3];

// De Novato a Ninja: Aprende TypeScript - curso intensivo (#2)

// Enums

const enum ERROR_TYPES {
  NOT_FOUND = "notFound",
  UNAUTHORIZED = "unathorized",
  FORBIDDEN = "forbidden",
}

function mostrarMensaje(tipoDeError: ERROR_TYPES) {
  if (tipoDeError === ERROR_TYPES.NOT_FOUND) {
    console.log("No se encuentra el recurso");
  }
  if (tipoDeError === ERROR_TYPES.UNAUTHORIZED) {
    console.log("No estas autorizado");
  }
  if (tipoDeError === ERROR_TYPES.FORBIDDEN) {
    console.log("No se Es Forbidden");
  }
}

// Aserciones de tipo
// Atrapar un canvas en typescript o elementos en javascript

const canvas = document.createElement("canvas");
// Inferencia de dato para validar que el dato sea correcto.
// Solo si es un elemento Canvas es que entrara en dicha condicional.

if (canvas instanceof HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  console.log("CTX =>", ctx);
}

// fetching de datos en typescript

// To parse this data:
//
//   import { Convert, GitHubAPIResponse } from "./file";
//
//   const gitHubAPIResponse = Convert.toGitHubAPIResponse(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

// export type GitHubAPIResponse = {
//   total_count: number;
//   incomplete_results: boolean;
//   items: Item[];
// };

// export type Item = {
//   id: number;
//   node_id: string;
//   name: string;
//   full_name: string;
//   private: boolean;
//   owner: Owner;
//   html_url: string;
//   description: null | string;
//   fork: boolean;
//   url: string;
//   forks_url: string;
//   keys_url: string;
//   collaborators_url: string;
//   teams_url: string;
//   hooks_url: string;
//   issue_events_url: string;
//   events_url: string;
//   assignees_url: string;
//   branches_url: string;
//   tags_url: string;
//   blobs_url: string;
//   git_tags_url: string;
//   git_refs_url: string;
//   trees_url: string;
//   statuses_url: string;
//   languages_url: string;
//   stargazers_url: string;
//   contributors_url: string;
//   subscribers_url: string;
//   subscription_url: string;
//   commits_url: string;
//   git_commits_url: string;
//   comments_url: string;
//   issue_comment_url: string;
//   contents_url: string;
//   compare_url: string;
//   merges_url: string;
//   archive_url: string;
//   downloads_url: string;
//   issues_url: string;
//   pulls_url: string;
//   milestones_url: string;
//   notifications_url: string;
//   labels_url: string;
//   releases_url: string;
//   deployments_url: string;
//   created_at: Date;
//   updated_at: Date;
//   pushed_at: Date;
//   git_url: string;
//   ssh_url: string;
//   clone_url: string;
//   svn_url: string;
//   homepage: null | string;
//   size: number;
//   stargazers_count: number;
//   watchers_count: number;
//   language: Language | null;
//   has_issues: boolean;
//   has_projects: boolean;
//   has_downloads: boolean;
//   has_wiki: boolean;
//   has_pages: boolean;
//   has_discussions: boolean;
//   forks_count: number;
//   mirror_url: null;
//   archived: boolean;
//   disabled: boolean;
//   open_issues_count: number;
//   license: License | null;
//   allow_forking: boolean;
//   is_template: boolean;
//   web_commit_signoff_required: boolean;
//   topics: string[];
//   visibility: Visibility;
//   forks: number;
//   open_issues: number;
//   watchers: number;
//   default_branch: DefaultBranch;
//   score: number;
// };

// export enum DefaultBranch {
//   Dev = "dev",
//   Main = "main",
//   Master = "master",
// }

// export enum Language {
//   CSS = "CSS",
//   HTML = "HTML",
//   JavaScript = "JavaScript",
//   ObjectiveC = "Objective-C",
//   TypeScript = "TypeScript",
// }

// export type License = {
//   key: string;
//   name: string;
//   spdx_id: string;
//   url: null | string;
//   node_id: string;
// };

// export type Owner = {
//   login: string;
//   id: number;
//   node_id: string;
//   avatar_url: string;
//   gravatar_id: string;
//   url: string;
//   html_url: string;
//   followers_url: string;
//   following_url: string;
//   gists_url: string;
//   starred_url: string;
//   subscriptions_url: string;
//   organizations_url: string;
//   repos_url: string;
//   events_url: string;
//   received_events_url: string;
//   type: Type;
//   site_admin: boolean;
// };

// export enum Type {
//   Organization = "Organization",
//   User = "User",
// }

// export enum Visibility {
//   Public = "public",
// }

// // Converts JSON strings to/from your types
// // and asserts the results of JSON.parse at runtime
// export class Convert {
//   public static toGitHubAPIResponse(json: string): GitHubAPIResponse {
//     return cast(JSON.parse(json), r("GitHubAPIResponse"));
//   }

//   public static gitHubAPIResponseToJson(value: GitHubAPIResponse): string {
//     return JSON.stringify(uncast(value, r("GitHubAPIResponse")), null, 2);
//   }
// }

// function invalidValue(typ: any, val: any, key: any, parent: any = ""): never {
//   const prettyTyp = prettyTypeName(typ);
//   const parentText = parent ? ` on ${parent}` : "";
//   const keyText = key ? ` for key "${key}"` : "";
//   throw Error(
//     `Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(
//       val
//     )}`
//   );
// }

// function prettyTypeName(typ: any): string {
//   if (Array.isArray(typ)) {
//     if (typ.length === 2 && typ[0] === undefined) {
//       return `an optional ${prettyTypeName(typ[1])}`;
//     } else {
//       return `one of [${typ
//         .map((a) => {
//           return prettyTypeName(a);
//         })
//         .join(", ")}]`;
//     }
//   } else if (typeof typ === "object" && typ.literal !== undefined) {
//     return typ.literal;
//   } else {
//     return typeof typ;
//   }
// }

// function jsonToJSProps(typ: any): any {
//   if (typ.jsonToJS === undefined) {
//     const map: any = {};
//     typ.props.forEach((p: any) => (map[p.json] = { key: p.js, typ: p.typ }));
//     typ.jsonToJS = map;
//   }
//   return typ.jsonToJS;
// }

// function jsToJSONProps(typ: any): any {
//   if (typ.jsToJSON === undefined) {
//     const map: any = {};
//     typ.props.forEach((p: any) => (map[p.js] = { key: p.json, typ: p.typ }));
//     typ.jsToJSON = map;
//   }
//   return typ.jsToJSON;
// }

// function transform(
//   val: any,
//   typ: any,
//   getProps: any,
//   key: any = "",
//   parent: any = ""
// ): any {
//   function transformPrimitive(typ: string, val: any): any {
//     if (typeof typ === typeof val) return val;
//     return invalidValue(typ, val, key, parent);
//   }

//   function transformUnion(typs: any[], val: any): any {
//     // val must validate against one typ in typs
//     const l = typs.length;
//     for (let i = 0; i < l; i++) {
//       const typ = typs[i];
//       try {
//         return transform(val, typ, getProps);
//       } catch (_) {}
//     }
//     return invalidValue(typs, val, key, parent);
//   }

//   function transformEnum(cases: string[], val: any): any {
//     if (cases.indexOf(val) !== -1) return val;
//     return invalidValue(
//       cases.map((a) => {
//         return l(a);
//       }),
//       val,
//       key,
//       parent
//     );
//   }

//   function transformArray(typ: any, val: any): any {
//     // val must be an array with no invalid elements
//     if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
//     return val.map((el) => transform(el, typ, getProps));
//   }

//   function transformDate(val: any): any {
//     if (val === null) {
//       return null;
//     }
//     const d = new Date(val);
//     if (isNaN(d.valueOf())) {
//       return invalidValue(l("Date"), val, key, parent);
//     }
//     return d;
//   }

//   function transformObject(
//     props: { [k: string]: any },
//     additional: any,
//     val: any
//   ): any {
//     if (val === null || typeof val !== "object" || Array.isArray(val)) {
//       return invalidValue(l(ref || "object"), val, key, parent);
//     }
//     const result: any = {};
//     Object.getOwnPropertyNames(props).forEach((key) => {
//       const prop = props[key];
//       const v = Object.prototype.hasOwnProperty.call(val, key)
//         ? val[key]
//         : undefined;
//       result[prop.key] = transform(v, prop.typ, getProps, key, ref);
//     });
//     Object.getOwnPropertyNames(val).forEach((key) => {
//       if (!Object.prototype.hasOwnProperty.call(props, key)) {
//         result[key] = transform(val[key], additional, getProps, key, ref);
//       }
//     });
//     return result;
//   }

//   if (typ === "any") return val;
//   if (typ === null) {
//     if (val === null) return val;
//     return invalidValue(typ, val, key, parent);
//   }
//   if (typ === false) return invalidValue(typ, val, key, parent);
//   let ref: any = undefined;
//   while (typeof typ === "object" && typ.ref !== undefined) {
//     ref = typ.ref;
//     typ = typeMap[typ.ref];
//   }
//   if (Array.isArray(typ)) return transformEnum(typ, val);
//   if (typeof typ === "object") {
//     return typ.hasOwnProperty("unionMembers")
//       ? transformUnion(typ.unionMembers, val)
//       : typ.hasOwnProperty("arrayItems")
//       ? transformArray(typ.arrayItems, val)
//       : typ.hasOwnProperty("props")
//       ? transformObject(getProps(typ), typ.additional, val)
//       : invalidValue(typ, val, key, parent);
//   }
//   // Numbers can be parsed by Date but shouldn't be.
//   if (typ === Date && typeof val !== "number") return transformDate(val);
//   return transformPrimitive(typ, val);
// }

// function cast<T>(val: any, typ: any): T {
//   return transform(val, typ, jsonToJSProps);
// }

// function uncast<T>(val: T, typ: any): any {
//   return transform(val, typ, jsToJSONProps);
// }

// function l(typ: any) {
//   return { literal: typ };
// }

// function a(typ: any) {
//   return { arrayItems: typ };
// }

// function u(...typs: any[]) {
//   return { unionMembers: typs };
// }

// function o(props: any[], additional: any) {
//   return { props, additional };
// }

// function m(additional: any) {
//   return { props: [], additional };
// }

// function r(name: string) {
//   return { ref: name };
// }

// const typeMap: any = {
//   GitHubAPIResponse: o(
//     [
//       { json: "total_count", js: "total_count", typ: 0 },
//       { json: "incomplete_results", js: "incomplete_results", typ: true },
//       { json: "items", js: "items", typ: a(r("Item")) },
//     ],
//     false
//   ),
//   Item: o(
//     [
//       { json: "id", js: "id", typ: 0 },
//       { json: "node_id", js: "node_id", typ: "" },
//       { json: "name", js: "name", typ: "" },
//       { json: "full_name", js: "full_name", typ: "" },
//       { json: "private", js: "private", typ: true },
//       { json: "owner", js: "owner", typ: r("Owner") },
//       { json: "html_url", js: "html_url", typ: "" },
//       { json: "description", js: "description", typ: u(null, "") },
//       { json: "fork", js: "fork", typ: true },
//       { json: "url", js: "url", typ: "" },
//       { json: "forks_url", js: "forks_url", typ: "" },
//       { json: "keys_url", js: "keys_url", typ: "" },
//       { json: "collaborators_url", js: "collaborators_url", typ: "" },
//       { json: "teams_url", js: "teams_url", typ: "" },
//       { json: "hooks_url", js: "hooks_url", typ: "" },
//       { json: "issue_events_url", js: "issue_events_url", typ: "" },
//       { json: "events_url", js: "events_url", typ: "" },
//       { json: "assignees_url", js: "assignees_url", typ: "" },
//       { json: "branches_url", js: "branches_url", typ: "" },
//       { json: "tags_url", js: "tags_url", typ: "" },
//       { json: "blobs_url", js: "blobs_url", typ: "" },
//       { json: "git_tags_url", js: "git_tags_url", typ: "" },
//       { json: "git_refs_url", js: "git_refs_url", typ: "" },
//       { json: "trees_url", js: "trees_url", typ: "" },
//       { json: "statuses_url", js: "statuses_url", typ: "" },
//       { json: "languages_url", js: "languages_url", typ: "" },
//       { json: "stargazers_url", js: "stargazers_url", typ: "" },
//       { json: "contributors_url", js: "contributors_url", typ: "" },
//       { json: "subscribers_url", js: "subscribers_url", typ: "" },
//       { json: "subscription_url", js: "subscription_url", typ: "" },
//       { json: "commits_url", js: "commits_url", typ: "" },
//       { json: "git_commits_url", js: "git_commits_url", typ: "" },
//       { json: "comments_url", js: "comments_url", typ: "" },
//       { json: "issue_comment_url", js: "issue_comment_url", typ: "" },
//       { json: "contents_url", js: "contents_url", typ: "" },
//       { json: "compare_url", js: "compare_url", typ: "" },
//       { json: "merges_url", js: "merges_url", typ: "" },
//       { json: "archive_url", js: "archive_url", typ: "" },
//       { json: "downloads_url", js: "downloads_url", typ: "" },
//       { json: "issues_url", js: "issues_url", typ: "" },
//       { json: "pulls_url", js: "pulls_url", typ: "" },
//       { json: "milestones_url", js: "milestones_url", typ: "" },
//       { json: "notifications_url", js: "notifications_url", typ: "" },
//       { json: "labels_url", js: "labels_url", typ: "" },
//       { json: "releases_url", js: "releases_url", typ: "" },
//       { json: "deployments_url", js: "deployments_url", typ: "" },
//       { json: "created_at", js: "created_at", typ: Date },
//       { json: "updated_at", js: "updated_at", typ: Date },
//       { json: "pushed_at", js: "pushed_at", typ: Date },
//       { json: "git_url", js: "git_url", typ: "" },
//       { json: "ssh_url", js: "ssh_url", typ: "" },
//       { json: "clone_url", js: "clone_url", typ: "" },
//       { json: "svn_url", js: "svn_url", typ: "" },
//       { json: "homepage", js: "homepage", typ: u(null, "") },
//       { json: "size", js: "size", typ: 0 },
//       { json: "stargazers_count", js: "stargazers_count", typ: 0 },
//       { json: "watchers_count", js: "watchers_count", typ: 0 },
//       { json: "language", js: "language", typ: u(r("Language"), null) },
//       { json: "has_issues", js: "has_issues", typ: true },
//       { json: "has_projects", js: "has_projects", typ: true },
//       { json: "has_downloads", js: "has_downloads", typ: true },
//       { json: "has_wiki", js: "has_wiki", typ: true },
//       { json: "has_pages", js: "has_pages", typ: true },
//       { json: "has_discussions", js: "has_discussions", typ: true },
//       { json: "forks_count", js: "forks_count", typ: 0 },
//       { json: "mirror_url", js: "mirror_url", typ: null },
//       { json: "archived", js: "archived", typ: true },
//       { json: "disabled", js: "disabled", typ: true },
//       { json: "open_issues_count", js: "open_issues_count", typ: 0 },
//       { json: "license", js: "license", typ: u(r("License"), null) },
//       { json: "allow_forking", js: "allow_forking", typ: true },
//       { json: "is_template", js: "is_template", typ: true },
//       {
//         json: "web_commit_signoff_required",
//         js: "web_commit_signoff_required",
//         typ: true,
//       },
//       { json: "topics", js: "topics", typ: a("") },
//       { json: "visibility", js: "visibility", typ: r("Visibility") },
//       { json: "forks", js: "forks", typ: 0 },
//       { json: "open_issues", js: "open_issues", typ: 0 },
//       { json: "watchers", js: "watchers", typ: 0 },
//       { json: "default_branch", js: "default_branch", typ: r("DefaultBranch") },
//       { json: "score", js: "score", typ: 0 },
//     ],
//     false
//   ),
//   License: o(
//     [
//       { json: "key", js: "key", typ: "" },
//       { json: "name", js: "name", typ: "" },
//       { json: "spdx_id", js: "spdx_id", typ: "" },
//       { json: "url", js: "url", typ: u(null, "") },
//       { json: "node_id", js: "node_id", typ: "" },
//     ],
//     false
//   ),
//   Owner: o(
//     [
//       { json: "login", js: "login", typ: "" },
//       { json: "id", js: "id", typ: 0 },
//       { json: "node_id", js: "node_id", typ: "" },
//       { json: "avatar_url", js: "avatar_url", typ: "" },
//       { json: "gravatar_id", js: "gravatar_id", typ: "" },
//       { json: "url", js: "url", typ: "" },
//       { json: "html_url", js: "html_url", typ: "" },
//       { json: "followers_url", js: "followers_url", typ: "" },
//       { json: "following_url", js: "following_url", typ: "" },
//       { json: "gists_url", js: "gists_url", typ: "" },
//       { json: "starred_url", js: "starred_url", typ: "" },
//       { json: "subscriptions_url", js: "subscriptions_url", typ: "" },
//       { json: "organizations_url", js: "organizations_url", typ: "" },
//       { json: "repos_url", js: "repos_url", typ: "" },
//       { json: "events_url", js: "events_url", typ: "" },
//       { json: "received_events_url", js: "received_events_url", typ: "" },
//       { json: "type", js: "type", typ: r("Type") },
//       { json: "site_admin", js: "site_admin", typ: true },
//     ],
//     false
//   ),
//   DefaultBranch: ["dev", "main", "master"],
//   Language: ["CSS", "HTML", "JavaScript", "Objective-C", "TypeScript"],
//   Type: ["Organization", "User"],
//   Visibility: ["public"],
// };

const API_URL = "https://api.github.com/search/repositories?q=javascript";

// async function fetchData() {
//   const response = await fetch(API_URL);

//   if (!response.ok) {
//     throw new Error("Request Failed");
//   }

//   const data = (await response.json()) as GitHubAPIResponse;

//   const repos = data.items.map((repo) => {
//     // Asegúrate de especificar el tipo de repo si es posible
//     console.log(repo);

//     // lol
//   });
// }

// Llama a la función fetchData para iniciar la ejecución
// fetchData();

//  Interfaces

interface Heroe {
  id: string;
  name: string;
  age: number;
}

// interfaces dentro de otra interfaz

interface Producto {
  id: number;
  nombre: string;
  precio: string;
  quantity: number;
}

interface CarritoDeCompra {
  totalPrice: number;
  products: Producto[];
}

// Creación de algunos productos
const productos: Producto[] = [
  { id: 1, nombre: "Camiseta", precio: "20.00", quantity: 2 },
  { id: 2, nombre: "Pantalones", precio: "30.00", quantity: 1 },
  { id: 3, nombre: "Zapatos", precio: "50.00", quantity: 1 },
  { id: 4, nombre: "Gorra", precio: "15.00", quantity: 3 },
  { id: 5, nombre: "Calcetines", precio: "5.00", quantity: 5 },
  { id: 6, nombre: "Cinturón", precio: "10.00", quantity: 1 },
  { id: 7, nombre: "Bufanda", precio: "12.00", quantity: 2 },
  { id: 8, nombre: "Guantes", precio: "8.00", quantity: 2 },
  { id: 9, nombre: "Sombrero", precio: "20.00", quantity: 1 },
  { id: 10, nombre: "Chaquetón", precio: "70.00", quantity: 1 },
];

// Calcular el precio total del carrito de compras
const totalPrice: number = productos.reduce((total, producto) => {
  return total + parseFloat(producto.precio) * producto.quantity;
}, 0);

// Crear el carrito de compras
const carritoDeCompra: CarritoDeCompra = {
  totalPrice: totalPrice,
  products: productos,
};

// Imprimir el carrito de compras
console.log(carritoDeCompra);

// Extension de interfaces

interface Shoes extends Producto {
  size: number;
}

// Crear un nuevo objeto Shoes
const newShoes: Shoes = {
  id: 11,
  nombre: "Zapatillas deportivas",
  precio: "60.00",
  quantity: 1,
  size: 42, // Propiedad adicional de Shoes
};

// Imprimir el nuevo objeto Shoes
console.log(newShoes);

//  Escribir funciones en las interfaces

interface CarritoOps {
  add: (product: Producto) => void;
  remove: (id: number) => void;
  clear: () => void;
}

//  Otra forma

interface CarritOps {
  add(product: Producto): void;
  remove(id: number): void;
  clear(): void;
}

//  Narrowing

// Verificar y hacer las validaciones, para ciertos tipos de datos.

function mostrarLongitud(objeto: number | string) {
  if (typeof objeto === "string") {
    return objeto.length;
  }

  return objeto.toString().length;
}

interface PersonajeGeneral {
  company: string;
  nombre: string;
  tipo: "Mario" | "Sonic";
}

interface Mario extends PersonajeGeneral {
  saltar: () => void;
}

interface Sonic extends PersonajeGeneral {
  correr: () => void;
}

type Personaje = Mario | Sonic;

//  Type guard

function checkIsSonic(personaje: Personaje): personaje is Sonic {
  return (personaje as Sonic).correr !== undefined;
}

function checkIsMario(personaje: Personaje): personaje is Mario {
  return (personaje as Mario).saltar !== undefined;
}

function jugar(personaje: Personaje) {
  if (personaje.tipo === "Mario") {
    console.log(`${personaje.nombre} está saltando`);
    (personaje as Mario).saltar(); // Type assertion para acceder a las propiedades de Mario
  } else if (personaje.tipo === "Sonic") {
    console.log(`${personaje.nombre} está corriendo`);
    (personaje as Sonic).correr(); // Type assertion para acceder a las propiedades de Sonic
  }
}

function play(personaje: Personaje) {
  if (checkIsSonic(personaje)) {
    personaje.correr();
    return;
  }
  if (checkIsMario(personaje)) {
    personaje.saltar();
    return;
  }
}

//  Never ejemplo

function fn(x: string | number) {
  if (typeof x === "string") {
    x.toUpperCase();
  } else if (typeof x === "number") {
    x.toFixed(2);
  } else {
    x;
  }
}

//  Clases

class Avenger {
  private _name: string;
  private _powerScore: number;
  private _wonBattles: number;

  constructor(name: string, powerScore: number) {
    this._name = name;
    this._powerScore = powerScore;
    this._wonBattles = 0; // Inicializamos el número de batallas ganadas en 0
  }

  // Método para obtener el nombre completo
  getFullName(): string {
    return `Avenger: ${this._name}`;
  }

  // Método getter para el poder
  get power(): number {
    return this._powerScore;
  }

  // Método setter para el poder con validación
  set power(score: number) {
    if (score > 100) {
      this._powerScore = score;
    } else {
      console.log("El puntaje de poder debe ser mayor a 100.");
    }
  }

  // Método para aumentar el número de batallas ganadas
  winBattle(): void {
    this._wonBattles++;
    console.log(`${this._name} ha ganado una batalla.`);
  }

  // Método para imprimir el estado del Avenger
  printStatus(): void {
    console.log(
      `${this._name} - Puntaje de poder: ${this._powerScore}, Batallas ganadas: ${this._wonBattles}`
    );
  }
}

// Crear una instancia del Capitán América
const capitanAmerica = new Avenger("Capitán América", 120);
console.log(capitanAmerica.getFullName());

